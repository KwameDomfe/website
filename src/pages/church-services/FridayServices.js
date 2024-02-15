import { Link } from "react-router-dom";


export default function FridayService() {
  
    return (
    <div id="contact"
        className=""
    >
         <div id="AnnualProgrammes"
            className="min-vh-50 h-100 w-100 flex flex-column items-center justify-center tc"
        >
            <h1 className="f3-00">Friday Services</h1>
            <h2 className="f2-00">(Prayer / Supernatural Service)</h2>

            <div className="grid gtc12 ggap2-00 w-100 pr1-00 mb4-00"
            >
                <div className="gc1s6 gr1s1
                    flex items-center justify-center 
                    bg-black-50 "
                >
                    <div class="pa2-00">
                        <h1 class="mb4-00">Friday Service I</h1>
                        <Link class="white-90 pv0-50 ph1-00 ba br0-25" 
                            to=""
                        >
                                Explore More
                        </Link>
                    </div>
                </div>
                <div className="gc7s6 gr1s1
                    flex items-center justify-center
                    bg-black-20 "
                >
                    <div class="pa2-00">
                        <h1 class="mb4-00">Friday Service II</h1>
                        <Link class="white-90 pv0-50 ph1-00 ba br0-25" 
                            to=""
                        >
                                Explore More
                        </Link>
                    </div>
                </div>
                <div className="gc1s6 gr2s1
                    flex items-center justify-center
                    
                    bg-black-50 "
                >
                    <div class="pa2-00">
                        <h1 class="mb4-00">Friday Service III</h1>
                        <Link class="white-90 pv0-50 ph1-00 ba br0-25" 
                            to=""
                        >
                                Explore More
                        </Link>
                    </div>
                </div>
                <div className="gc7s6 gr2s1
                    flex items-center justify-center
                    
                    bg-black-20 "
                >
                    <div class="pa2-00">
                        <h1 class="mb4-00">Friday Service IV</h1>
                        <Link class="white-90 pv0-50 ph1-00 ba br0-25" 
                            to=""
                        >
                                Explore More
                        </Link>
                    </div>
                </div>
            </div>

        </div>

      
    </div>
  )
}
