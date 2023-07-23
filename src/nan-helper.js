/**
 * nan-helper.js - some usefull functions
 */

/**
 * To00() - returns integer with minimum 2 digits with leading zero
 *
 * 0 -> "00"
 * 7 -> "07"
 * 28 -> "28"
 * 666 -> "666"
 */
function To00(num) {
	return (num < 10 ? "0" : "") + num;
}

/**
 * To000() - returns integer with minimum 3 digits with leading zero(s)
 */
function To000(num) {
	return (num > 99 ? "" : (num > 9 ? "0" : "00")) + num;
}

/**
 * Ms2YYYYMMDD
 *
 * Output format is string: YYYY/MM/DD hh:mm:ss.ttt
 */
function Ms2YYYYMMDD(ms) {
	var time = new Date(ms);
	return "" + time.getFullYear() + "/" + To00(time.getMonth() + 1) + "/" + To00(time.getDate());
}

/**
 * Ms2YYYYMMDDhhmmssttt
 *
 * Output format is string: YYYY/MM/DD hh:mm:ss.ttt
 */
function Ms2YYYYMMDDhhmmssttt(ms) {
	var time = new Date(ms);
	var result = Ms2YYYYMMDD(ms) + " " + To00(time.getHours()) + ":" + To00(time.getMinutes());
	result += ":" + To00(time.getSeconds()) + "." + To000(ms % 1000);
	return result;
}

/**
 * curr_date_YYMMDDhhmmss
 *
 * Output format is string: YYMMDDhhmmss
 */
function curr_date_YYMMDDhhmmss() {
	var time = new Date();
	return To00(time.getYear()) + To00(time.getMonth() + 1) + To00(time.getDate()) +
	       To00(time.getHours()) + To00(time.getMinutes()) + To00(time.getSeconds());
}

/**
 * denull - returns string '(?)' if argument is null
 */
function denuller(val) {
  return val == null || val == undefined ? '?' : val;
}
