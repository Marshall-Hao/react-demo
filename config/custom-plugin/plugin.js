// // import { RawSource } from 'webpack-sources';

// class WebpackSizePlugin {
//   PLUGIN_NAME = "WebpackSizePlugin";

//   constructor(options) {
//     this.options = options;
//   }

//   apply(compiler) {
//     const outputOptions = compiler.options.output;
//     //  * 执行tapable hook方法
//     console.log(compiler.hooks, compiler.hooks.emit);
//     compiler.hooks.done.tap(
//       this.PLUGIN_NAME,
//       (compilation) => {
//         const assets = compilation.assets;
//         const buildSize = {};
//         const files = Object.keys(assets);
//         let total = 0;
//         for (let file of files) {
//           const size = assets[file].size();
//           buildSize[file] = size;
//           total += size;
//         }
//         console.log("build size", buildSize);
//         console.log("Total size", total);
//       }
//     );
//   }
// }

// module.exports = WebpackSizePlugin;

class WebpackSizePlugin {
  apply(compiler) {
    console.log(compiler.hooks);
    compiler.hooks.emit.tap(
      "Hello World Plugin",
      (
        stats /* stats is passed as an argument when done hook is tapped.  */
      ) => {
        console.log("Hello World!");
      }
    );
  }
}

module.exports = WebpackSizePlugin;
