'use strict';

/**
 * session configs
 */
export default {
  name: 'thinkjs',
  type: 'file',
  secret: 'D0O~E7(M',
  timeout: 24 * 3600,
  cookie: { // cookie options
    length: 32,
    httponly: true
  },
  adapter: {
    file: {
      path: think.RUNTIME_PATH + '/session',
    }
  }
};