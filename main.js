function  add () {
    var result_add = Number(document.getElementById("add_num_1").value)  + Number(document.getElementById("add_num_2").value);
   document.getElementById("add_ans").innerHTML = result_add
      
    }

    function  sub () {
        var result_sub = Number(document.getElementById("sub_num_1").value)  - Number(document.getElementById("sub_num_2").value);
       document.getElementById("sub_ans").innerHTML = result_sub
          
        }

        function  mult () {
            var result_mult = Number(document.getElementById("mult_num_1").value)  * Number(document.getElementById("mult_num_2").value);
           document.getElementById("mult_ans").innerHTML = result_mult
        }

        function  div () {
            var result_div = Number(document.getElementById("div_num_1").value)  / Number(document.getElementById("div_num_2").value);
           document.getElementById("div_ans").innerHTML = result_div
        }