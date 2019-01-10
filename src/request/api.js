import { get, post } from './http';
/**
 * g
 */
export const testGet = p => get('article', p)
// login
export const apilogin = p => get('member/getToken', p)
//getsymptom
export const apigetdefault = p => get('getSymptomsByCrowd', p)
//getone
export const apionefloor = p => get('package/propertyHomePage', p)
//getonedetail
export const getNutrientPlanPackage = p => get('/getNutrientPlanPackage', p)
export const getFoodsByMeal = p => get('/getFoodsByMeal', p)
//getwo
export const apitwofloor = p => get('package/customByHomePage', p);
//getwodetail
export const apitwodetail = (url,p) => get(url, p)
//threefloor
export const apithreefloor = p => get('article/type', p);
//threefloordetail
export const apithreedetail = (url,p) => get(url, p);
//collect
export const apicollect = data => get('member/collection', data);
//hotsearch 
export const apihotsearch = data => get('search/hotkeywords', data);
//getsearch 
export const apigetsearch = data => get('search', data);
//changefood foodsReplace
export const apifoodsReplace = data => get('packageGoodReplace', data);


/**
 * p   
 */

export const testPost = p => post('api/TestPost', p)
export const apiAddress = p => post('article/test/label', p);
//twofloorcollect
export const twofloorcollect = p => post('member/collection', p)
//comment
export const comment = p => post('article/comment', p)

/**
 *  delete
 */
export const apidelete = (url,p) => deleteMethod(url, p)