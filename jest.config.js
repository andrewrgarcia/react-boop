module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"]
};
