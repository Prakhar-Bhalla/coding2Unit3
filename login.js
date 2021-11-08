async function login(e) {
    e.preventDefault();
    let details = document.getElementsByTagName("input");
    let data = {
        password: details[1].value,
        username: details[0].value,
    };

    let user = JSON.stringify(data);
    
    let res = await fetch("http://masai-api-mocker.herokuapp.com/auth/login", {
        method: `POST`,
        body: user,
        headers: {
            "Content-Type": "application/json",
        },
    });

    console.log(res);
    
}