let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

 let is_shop_open = false;

 let order = (time , work) => {
    
    return new Promise( (resolve,reject) => {
        setTimeout(() => {
            if(is_shop_open){
                resolve( work() );
            }
            else reject(console.log('our shop is closed'));
        },time);
        
    })
 }