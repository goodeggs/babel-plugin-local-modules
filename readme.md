# local-modules babel plugin

Transforms all `require` statements in your code that point to `local_modules`,
so that instead they point to the `local_modules` folder in the base directory
of your project.

A workaround to avoid using npm hacks or modules like `aperture`, which add
symlinks to the `node_modules` directory and break behavior of the `npm
install` and `npm shrinkwrap` commands.
