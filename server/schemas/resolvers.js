const { User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    user: async (_, { id, username }) => {
      const query = {};
      if (id) {
        query._id = id;
      }
      if (username) {
        query.username = username;
      }
      const foundUser = await User.findOne(query);
      if (!foundUser) {
        throw new Error("User not found");
      }
      return foundUser;
    },
    users: async () => {
      const users = await User.find();
      return users;
    },
  },
  Mutation: {
    signup: async (_, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      return user;
    },
    login: async (_, { username, email, password }) => {
      const query = {};
      if (username) {
        query.username = username;
      }
      if (email) {
        query.email = email;
      }
      const user = await User.findOne(query);
      if (!user) {
        throw new Error("User not found");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new Error("Incorrect password");
      }
      return user;
    },
    saveBook: async (_, { userId, bookId }) => {
      const updatedUser = await User.findOneAndUpdate(
        { _id: userId },
        { $addToSet: { savedBooks: { bookId } } },
        { new: true }
      );
      if (!updatedUser) {
        throw new Error("User not found");
      }
      return updatedUser;
    },
    deleteBook: async (_, { userId, bookId }) => {
      const updatedUser = await User.findOneAndUpdate(
        { _id: userId },
        { $pull: { savedBooks: { bookId } } },
        { new: true }
      );
      if (!updatedUser) {
        throw new Error("User not found");
      }
      return updatedUser;
    },
  },
};

module.exports = resolvers;
