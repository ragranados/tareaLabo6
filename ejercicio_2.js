class Conversor {
    convertir(medida, uniOriginal, uniASer, tipo) {

        if (tipo == "L") {

            if (uniOriginal == "m" && uniASer == "cm") {
                medida = medida * 100;
            } else if(uniOriginal == "km" && uniASer == "m") {
                medida = medida *1000;
            } else if(uniOriginal == "ft" && uniASer == "m") {
                medida = medida *0.3048;
            }

        } else if (tipo == "T") {
            if(uniOriginal == "C" && uniASer == "F"){
                medida = ((9/2)*medida)+32;
            }else if(uniOriginal == "K" && uniASer == "C"){
                medida = medida - 273.15;
                medida = (medida*1.8)+32;
            }else if(uniOriginal == "K" && uniASer == "C"){
                medida = medida - 273.15;
            }
        }
        var retornar = "";
        retornar = medida + uniASer;
        return retornar;
    }
}

var Conversor1 = new Conversor();