exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./specs/login.ts', './specs/forgot_password.ts'],

    onPrepare() {
        require('ts-node').register({
            project: 'tsconfig.json'
        })
    }
}

