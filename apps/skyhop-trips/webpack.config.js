const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  mode: "development",
  output: {
    publicPath: "auto",
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3002,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          configFile: "tsconfig.json",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "trips", // Unique ID for this app
      filename: "remoteEntry.js",
      exposes: {
        "./TripsApp": "./src/App",
      },
      shared: {
        react: { singleton: true, eager: true, requiredVersion: "19.2.4" },
        "react-dom": {
          singleton: true,
          eager: true,
          requiredVersion: "19.2.4",
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
