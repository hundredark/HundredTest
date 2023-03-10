import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import nodePolyfills from 'rollup-plugin-polyfill-node';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';
import inject from '@rollup/plugin-inject';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/HundredTest",

  plugins: [
    vue(),
  ],

	optimizeDeps: {
		esbuildOptions: {
			// Node.js global to browser globalThis
			define: {
				global: 'globalThis'
			},
			// Enable esbuild polyfill plugins
			plugins: [
				NodeGlobalsPolyfillPlugin({
					buffer: true,
					process: true
				}),
				NodeModulesPolyfillPlugin()
			]
		}
	},

	build: {
		rollupOptions: {
			plugins: [
				// ↓ Needed for build
				nodePolyfills(),
				inject({ Buffer: ['buffer', 'Buffer'] })
			],
		},
	},
	
  ssgOptions: {
    script: 'async',
    formatting: 'prettify',
    mock: true, 
    crittersOptions: {
      // E.g., change the preload strategy
      preload: 'media',
      // Other options: https://github.com/GoogleChromeLabs/critters#usage
    },
  }
})
