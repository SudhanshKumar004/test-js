function tax()
{
    let salary = parseInt(window.prompt("Enter salary"));

    if(salary>0 && salary < 300000)
    {
        window.alert("No tax to pay");
    }

    else if(salary>=300000 && salary < 750000)
    {
        let taxpayable = salary * 10 / 100;
        window.alert("tax is " + taxpayable);
    }

    else if(salary>=750000)
    {
        let taxpayable = salary * 20 / 100;
        window.alert("tax is " + taxpayable);
    }
    
}

tax();