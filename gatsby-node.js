// Migrating gatsbyjs from v2 to v3
// To solve the common error `process is not defined` in some dependencies
// Webpack 4 polyfilled process automatically in the browser, but with v5 it’s not the case anymore.
exports.onCreateWebpackConfig = ({ actions, stage, plugins }) => {
    if (stage === 'build-javascript' || stage === 'develop') {
        actions.setWebpackConfig({
            plugins: [plugins.provide({ process: 'process/browser' })],
        });
    }
};
