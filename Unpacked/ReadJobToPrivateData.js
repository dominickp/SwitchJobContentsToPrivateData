/*
  This script reads the body of a file to private data.
*/

function jobArrived( s : Switch, job : Job )
{
	// Set some property stuff
	if(s.getPropertyValue('Debug') == 'Yes'){
		var debug = true;
	} else {
		var debug = false;
	}
	
	var private_data_key = s.getPropertyValue('PrivateDataKey');
		
	if(job.isFile())
	{
		// Make temp file
		var body_content = File.read(job.getPath(), "UTF-8");
		
		// Set to PD
		job.setPrivateData(private_data_key, body_content);
		
		// Debug
		if(debug) s.log(1, 'Body: ' + body_content);
		
	} else {
		// Not supporting folders
		if(debug) s.log(2, 'Input job was folder.');
	}
}