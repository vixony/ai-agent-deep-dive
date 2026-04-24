/**
 * 生成指定长度的随机字符串
 * @param {number} length - 字符串长度
 * @param {string} [chars] - 可选的字符集，默认包含大小写字母和数字
 * @returns {string} 随机字符串
 */
function generateRandomString(length, chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') {
  if (typeof length !== 'number' || length < 1) {
    throw new RangeError('length must be a positive number');
  }
  let result = '';
  const charsLength = chars.length;
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * charsLength));
  }
  return result;
}

// 示例用法
console.log(generateRandomString(8));       // 例如: "aB3xZ9mQ"
console.log(generateRandomString(16));      // 例如: "Kj7nPqR2wLtY4cVs"
console.log(generateRandomString(6, '0123456789')); // 仅数字: "482031"

module.exports = generateRandomString;
