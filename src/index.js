var group=[];
function submitform(){
    var prSku=document.getElementById('product_sku').value;
    var prName=document.getElementById('product_name').value;
    var prPrice=document.getElementById('product_price').value;
    var prQuantity=document.getElementById('product_quantity').value;


    var object={};
    object.prSku=prSku;
    object.prName=prName;
    object.prPrice=prPrice;
    object.prQuantity=prQuantity;

    group.push(object);

    display();
    console.log("Group".group);
}

function display(){
    var html='';
    //   html+='product_list';//<table><tr><th></th><th>Name</th><th>Price</th><th>Quantity</th><th>Action</th></tr><tbody id="table_body"></tbody></table>';
    for(i=0;i<group.length;i++){
        html+='<tr><td>'+group[i].prSku+'</td><td>'+group[i].prName + '</td> <td>' +group[i].prPrice +'</td> <td> ' +group[i].prQuantity+'</td>  <td><a href="#" id="edit" >Edit</a> <a href="#" id="delete">Delete</a></td></tr>';
        html +='</table>';
        document.getElementById('table_body').innerHTML=html;
    }
}


