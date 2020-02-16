const getDxyData = require('./getDxyData')

exports.main_handler = async (event, context, callback) => {
  const data = await getDxyData()
  if (!data) return { error: 1, message: '加载失败，刷新再试' }
  return { error: 0, message: '', data }
}
