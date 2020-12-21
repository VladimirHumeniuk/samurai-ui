import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2';
import copy from 'rollup-plugin-copy'
import generatePackageJson from 'rollup-plugin-generate-package-json'

const packageJson = require('./package.json')

export default {
    input: 'src/index.ts',
    output: [
        {
          file: packageJson.main,
          format: "cjs",
          sourcemap: true
        },
        {
          file: packageJson.module,
          format: "esm",
          sourcemap: true
        }
    ],
    external: [
        'react',
        'react-dom'
    ],
    plugins: [
        resolve({ extensions: ['.jsx', '.js', '.ts', '.tsx'] }),
        commonjs(),
        babel({
            babelHelpers: 'runtime',
            extensions: ['.jsx', '.js', '.ts', '.tsx'],
            exclude: 'node_modules/**'
        }),
        typescript(),
        copy({
            targets: [{
                src: 'README.md', dest: 'build'
            }]
        }),
        generatePackageJson({
            outputFolder: 'build',
            baseContents: (pkg) => ({
                ...pkg,
                main: 'lib/index.js'
            })
        })
    ]
};