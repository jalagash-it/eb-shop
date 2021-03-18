// import Vue from 'vue'
import { Plugin } from '@nuxt/types'


const plugin: Plugin = (_context, inject) => {
    // inject('notify', )
}

// export default plugin

import { AxiosOptions } from '@nuxtjs/axios';
let conf: AxiosOptions = {
    baseURL: 'http://localhost:8000'
}
