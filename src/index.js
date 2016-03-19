import path from 'path'

const LOCAL_MODULES_NAME = 'local_modules'

export default function () {
  return {
    visitor: {
      CallExpression (pathObj, meta) {

        if(
          !pathObj.node ||
          !pathObj.node.callee ||
          !pathObj.node.arguments ||
          !pathObj.node.arguments[0] ||
          pathObj.node.callee.name !== 'require' ||
          pathObj.node.arguments[0].value.indexOf(LOCAL_MODULES_NAME) !== 0
        ) return

        const oldRequire = pathObj.node.arguments[0].value;
        const dirname = path.dirname(meta.file.opts.filename);
        const newLocalModulesPath = path.relative(dirname, LOCAL_MODULES_NAME)
        pathObj.node.arguments[0].value = './' + newLocalModulesPath + oldRequire.substr(LOCAL_MODULES_NAME.length)

      }
    }
  }
}
