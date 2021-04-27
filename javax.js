function NWD() 
{
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
        while (a != b)
        {
            if (a > b)
            {
                a = a - b;
            }

            else 
            {
                b = b - a;
            }
            document.getElementById('animate__wynik').innerHTML = a;
            document.getElementById('animate__wynik').style.animationName='flipInX';
            document.getElementById('animate__wynik').style.animationDuration='3s';
            document.getElementById('animate__wynik').style.fontFamily='Amaranth';
            document.getElementById('animate__wynik').style.fontSize='55px';
            document.getElementById('animate__wynik').style.color='white';
            document.getElementById('animate__wynik').style.marginLeft='300px';
            document.getElementById('animate__wynik').style.marginTop='100px';
            document.getElementById('animate__wynik').style.paddingTop='30px';



        }
}
