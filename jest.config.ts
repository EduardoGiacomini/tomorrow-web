import type { Config } from "@jest/types";

export default async (): Promise<Config.InitialOptions> => {
  return {
    preset: "ts-jest",
    verbose: true,
    coverageDirectory: "../coverage",
    coveragePathIgnorePatterns: [".*\\.spec\\.ts$"],
    testEnvironment: "jest-environment-jsdom",
    rootDir: "src",
    testRegex: ".*\\.spec\\.ts$",
    transform: {
      "^.+\\.(t|j)s$": "ts-jest",
    },
    moduleFileExtensions: ["js", "json", "ts", "tsx"],
  };
};
