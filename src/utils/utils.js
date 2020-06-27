export const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

// mapObj works like Array.map, except it takes the object and processing function as params
export const mapObj = (obj, fun) => {
	//Get keys
	var objKeys = Object.keys(obj)
	//map them against obj
	var newArr = objKeys.map( (key, index) => {
		// passed a function? process, else just give me the items in an array
		return fun ? fun(obj[key], index) : obj[key]
	})
	return newArr
}
