// Functions.js
function concatString()
{
	

	var args = Array.prototype.slice.call(arguments);
	//console.log(args.join());
	return args.join("");
}

function yourFunctionRunner()
{
	var val = "";
	for (var i = 0; i<arguments.length; i++)
	{
		val += arguments[i]();
	}
	return val;
}

function makeAdder(val)
{
	
	var closedVal = val;
	//console.log("Val: ",val);

	var addValues = function(val2)
	{
		//console.log("in addValues ",closedVal,val2);
		closedVal += val2;
		return closedVal;
	}
	//console.log("finish makeAdder");
	return addValues;
}

function once(myFunc)
{
	var numCalls = 0;
	
	var filtFunc = function()
	{
		console.log("numCalls: ", numCalls);
		if (numCalls == 0)
		{
			//console.log('added');
			numCalls++;
			return myFunc();
		}	
	}
	//console.log("called once",numCalls);
	return filtFunc;
}

function createObjectWithClosures()
{
	var x = 0;
	var obj =
	{
		oneIncrementer : function(){x++},
		tensIncrementer : function(){x+=10},
		getValue : function(){return x}
	}
	return obj;
}