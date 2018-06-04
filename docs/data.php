<?php
   // header("Content-Type: application/json; charset=UTF-8");
   date_default_timezone_set('UTC');
   $file = "data.json";
   $arr_data = []; // create empty array

   	if(isset($_POST["submit"]) && $_POST["submit"]){

   				$date = date('F j, Y, g:i a ');
	    		$formdata = [
	    				'Title' => $_POST["title"],
	    				'Link' => $_POST['link'] === "" ? "None" : $_POST['link'],
	    				'Date' => $date
	    			];

	      		$json = json_encode($formdata);
          		// $res = file_put_contents($file, $json, FILE_APPEND); //
          		// $out = !$res ? "can't write into file" : "Can write into file";
          		// echo $out;
          			$fh = fopen("./data.json", 'r+') or die("Error opening output file");
					fwrite($fh,$json);
					fclose($fh);
          			$jsondata = file_get_contents($file);
	      			// $arr_data = json_decode($jsondata, true);
	       			array_push($arr_data, json_decode($jsondata, true));



		  // var_dump($json);exit;
	      // = array(
	      //    'Title'=> $_POST['title'],
	      //    'Link'=> $_POST['link'],
	      //    "Date" => date("F j, Y, g:i a")
	      // );
	      // var_dump($formdata["Date"]);exit;

	       //Get data from existing json file



	       // converts json data into array
	       // $arr_data = json_decode($jsondata, true);

	       // Push user data to array
	   	  // array_push($arr_data,$formdata);

       	   //Convert updated array to JSON
		  // $jsondata = json_encode($arr_data); //JSON_PRETTY_PRINT

	   	   //write json data into data.json file


				echo $arr_data;
	  }

