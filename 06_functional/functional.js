function doubler(val)
{
	return val*2;
}

function map(array,mapFunc)
{
	for (var i = 0; i < array.length; i++)
	{
		array[i] = mapFunc(array[i]);
	}
	return array;
}


function filter(array,filtFunc)
{
	var result = [];
	for (var i = 0; i<array.length; i++)
	{
		if(filtFunc(array[i]))
			result.push(array[i]); 

	}
	return result;
}

function contains(obj,val)
{

	var keys = Object.keys(obj);

	//console.log("obj:",obj);
	//console.log("keys: ",keys);
	//console.log("val: ",val);
	for (var i = 0; i<keys.length; i++)
	{
		//console.log(obj[keys[i]]);
		if (obj[keys[i]] == val)
			return true; 
	}
	return false;
}

function countWords(phrase)
{
	return phrase.split(" ").length;
}

function countWordsInReduce(a,b)
{
	return a+countWords(b);
}

function reduce(array,startVal, reducerFunc)
{
	var currentVal = startVal;
	//debugger;
	for (var i = 0; i < array.length; i++)
	{
		currentVal = reducerFunc(currentVal, array[i]);
	}
	return currentVal;
}

function add(a, b) 
{
      return a + b;
};

function alwaysEven(a,b)
{
	return a && (b%2===0);
}

function isAnyEven(a,b)
{
	return a || b%2===0;
}

function sum(array)
{
	return reduce(array,0,add);
}

function every(array,everyFunc)
{
	//var startVal = array.getValue(0);
	return reduce(array,true,alwaysEven);
	
}

function any(array,anyFunc)
{
	
	return reduce(array,false,isAnyEven);
	
}