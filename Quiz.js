import { useState, useRef } from "react";

export default function Quiz() {
    const a = useRef(null)
    const b = useRef(null)
    const c = useRef(null)
    const d = useRef(null)
    const e = useRef(null)
    const f = useRef(null)
    const g = useRef(null)
    const h = useRef(null)
    const k = useRef(null)
    const l = useRef(null)
    const m = useRef(null)
    const n = useRef(null)

    const a1 = useRef(null)
    const b1 = useRef(null)
    const c1 = useRef(null)
    const d1 = useRef(null)
    const e1 = useRef(null)
    const f1 = useRef(null)
    const g1 = useRef(null)
    const h1 = useRef(null)

    const [r, setR] = useState("")
    const [r1, setR1] = useState("")
    const [r2, setR2] = useState("")
    const [r3, setR3] = useState("")
    const [r4, setR4] = useState("")
    const [r5, setR5] = useState("")
    const [ans, setAns] = useState("")

    function SubmitR(event){
     var ans = [a.current, b.current, c.current]
     var str =""
     var an =0; 
     var an1 =0; 
     for(let i=0; i<ans.length; i++){
        if(ans[i].checked){
                str += ans[i].value;
        }
     }
     if(str==="7"){
        setR("correct")
        an +=2
    }else{
         setR("incorrect")
         an1--
     }

     var ans1 = [d.current, e.current, f.current]
     var str1 =""
     for(let i=0; i<ans1.length; i++){
        if(ans1[i].checked){
                str1 += ans1[i].value;
        }
     }
     if(str1==="3"){
        setR1("correct")
        an +=2
    }else{
         setR1("incorrect")
         an1--
     }

     var ans2 = [g.current, h.current, k.current]
     var str2 =""
     for(let i=0; i<ans2.length; i++){
        if(ans2[i].checked){
                str2 += ans2[i].value;
        }
     }
     if(str2==="10"){
        setR2("correct")
        an +=2
    }else{
         setR2("incorrect")
         an1--
     }

     var ans3 = [l.current, m.current, n.current]
     var str3 =""
     for(let i=0; i<ans3.length; i++){
        if(ans3[i].checked){
                str3 += ans3[i].value;
        }
     }
     if(str3==="5"){
        setR3("correct")
        an +=2
    }else{
         setR3("incorrect")
         an1--
     }
     var ans4 = [a1.current, b1.current, c1.current, d1.current]
     var str4 =""
     for(let j=0; j<ans4.length; j++){
        if(ans4[0].checked && ans4[2].checked){
           setR4("correct")
           an +=2
           break;
       }else{
            setR4("incorrect")
            an1--
            break;
        }
     }
    
     var ans5 = [e1.current, f1.current, g1.current, h1.current]
     var str5 =""
     for(let i=0; i<ans5.length; i++){
        if(ans5[1].checked && ans5[3].checked){
            setR5("correct")
            an +=2
            break;
        }else{
             setR5("incorrect")
             an1--
             break;
         }
     }
     setAns("your score is = "+(an+an1))
     event.preventDefault()
    }

    return (
        <div>
            <style>{"*{margin:0px; padding:0px;}"}</style>
            <form onSubmit={SubmitR}>
                <h3>Q-1, a=2, b=5, c=a+b ?</h3>
                <input type="radio" name="r1" ref={a} value="3" /> 3<br />
                <input type="radio" name="r1" ref={b} value="7" /> 7<br />
                <input type="radio" name="r1" ref={c} value="6" /> 6<br />
                <p>{r}</p>
                <br />

                <h3>Q-2, a=2, b=5, c=b-a ?</h3>
                <input type="radio" name="r2" ref={d} value="3" /> 3<br />
                <input type="radio" name="r2" ref={e} value="7" /> 7<br />
                <input type="radio" name="r2" ref={f} value="1" /> 1<br />
                <p>{r1}</p><br />

                <h3>Q-3, a=2, b=5, c=a*b ?</h3>
                <input type="radio" name="r3" ref={g} value="8" /> 8<br />
                <input type="radio" name="r3" ref={h} value="15" /> 15<br />
                <input type="radio" name="r3" ref={k} value="10" /> 10<br />
                <p>{r2}</p><br />

                <h3>Q-4, a=45, b=9, c=a/b ?</h3>
                <input type="radio" name="r4" ref={l} value="9" /> 9<br />
                <input type="radio" name="r4" ref={m} value="5" /> 5<br />
                <input type="radio" name="r4" ref={n} value="12" /> 12<br />
                <p>{r3}</p><br />

                <h3>Q-5, if a=10, b=20 Choose correct answer?</h3>
                <input type="checkbox" ref={a1} value="30" /> a + b = 30<br />
                <input type="checkbox" ref={b1} value="10" /> a - b = 10<br />
                <input type="checkbox" ref={c1} value="200" /> a * b = 200<br />
                <input type="checkbox" ref={d1} value="30" /> b / a = 30<br />
                <p>{r4}</p><br />

                <h3>Q-6, if a=9, b=5 Choose correct answer?</h3>
                <input type="checkbox" ref={e1} value="13" /> a + b = 13<br />
                <input type="checkbox" ref={f1} value="4" /> a - b = 4<br />
                <input type="checkbox" ref={g1} value="40" /> a * b = 40<br />
                <input type="checkbox" ref={h1} value="1.8" /> a / b = 1.8<br />
                <p>{r5}</p><br />

                <h3>{ans}</h3>
                <input type="submit" value="submit" />
              
            </form>
            <hr />
            <hr />
        </div>
    )
}   