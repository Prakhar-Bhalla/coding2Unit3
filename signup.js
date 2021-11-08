async function signup(e) {
    e.preventDefault();
    let details = document.getElementsByTagName("input");
    let data = {
        name: details[0].value,
        email: details[1].value,
        password: details[3].value,
        username: details[2].value,
        mobile: details[4].value,
        description: "Masai Student"
    };

    let user = JSON.stringify(data);
    
    let res = await fetch("https://github.com/masai-school/api-mocker/wiki/Authentication-API" {
        method =  "POST"
        body = user
    })
    
}

