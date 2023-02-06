let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

 let order = (fruit_name,call_production) => {

    setTimeout(() => {
        console.log('Customer has placed an order,start production');
    },2000);
    call_production();
 }

 let production = () => {
    console.log('Production has started');
    setTimeout(() => {
        console.log(`${stocks.Fruits[2]} has been chopped`);

        setTimeout(() => {
            console.log(`Added ${stocks.liquid[0]} and ${stocks.liquid[1]}`);

            setTimeout(() => {
                console.log('Machine was started');

                setTimeout(() => {
                    console.log(`Selected ${stocks.holder[0]} container`);

                    setTimeout(() => {
                        console.log(`Selected ${stocks.toppings[0]} toppings`);

                        setTimeout(() => {
                            console.log('Served the Icecream');
                        },2000)
                    },3000)
                },2000)
            },1000)
        },1000)

    },2000)
 }

 order('',production);


 