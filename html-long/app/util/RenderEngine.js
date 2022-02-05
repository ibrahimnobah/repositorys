class RendererEngine{
    init(){
    }
    renderTemplate(obj,templateText)
    {   
        var table = $(".dataTabl");
        var arr=[];
        var myString = templateText;
        const regexpModifications = /\{{.*?\}}/g;
        arr=myString.match(regexpModifications);
        arr.forEach(Element=>{
          Element=Element.replace('{{','');
          Element=Element.replace('}}','');
          myString=myString.replace('{{'+Element+'}}',obj[Element]);
        });
        table.append(myString);
    }
    }
this.render = new RendererEngine();
