import { useState } from "react";
import { useHistory } from "react-router";
const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [date, setDate] = useState({
        year: "00",
        month: "00",
        day: "00"
    });
    const [image, setImage] = useState("");
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true);
        const post = { title, body, date, image};
        console.log(post);
        setIsPending(false);
    }
    return (
        <div className="create-post container">
            <h3>Add Your Memory</h3>
            <form onSubmit={handleSubmit}>
                <div className="file-field input-field">
                    <div className="btn">
                        <span>File</span>
                        <input type="file" onChange={(e) => {setImage({file:URL.createObjectURL(e.target.files[0])})}} />
                    </div>
                    <div class="file-path-wrapper">
                        <input className="file-path validate" type="text" />
                    </div>
                    <img src={image.file} width="200" height="200" />
                </div>
                <div className="input-field">
                    <input type="text"
                        required
                        id='title'
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label htmlFor="title">Memory title</label>
                </div>
                <div className="input-field">
                    <textarea
                        className="materialize-textarea"
                        data-length="120"
                        required
                        value={body}
                        onChange={(e) => setBody(e.target.value)} />

                    <label>Tell something about that</label>
                </div>
                <h6>Enter Date:</h6>
                <div className="row">
                    <div className="input-field col s12 m4">
                        <select
                            value={date.day}
                            onChange={(e) => setDate({
                                ...date,
                                day: e.target.value
                            }
                            )}
                        >
                            <option value="01">1</option>
                            <option value="02">2</option>
                            <option value="03">3</option>
                            <option value="04">4</option>
                            <option value="05">5</option>
                            <option value="06">6</option>
                            <option value="07">7</option>
                            <option value="08">8</option>
                            <option value="09">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                        </select>
                    </div>
                    <div className="input-field col s12 m4">
                        <select
                            value={date.month}
                            onChange={(e) => setDate({
                                ...date,
                                month: e.target.value
                            }
                            )}
                        >
                            <option value="01">January</option>
                            <option value="02">February</option>
                            <option value="03">March</option>
                            <option value="04">April</option>
                            <option value="05">May</option>
                            <option value="06">June</option>
                            <option value="07">July</option>
                            <option value="08">August</option>
                            <option value="09">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                        </select>

                    </div>
                    <div className="input-field col s12 m4">
                        <select
                            value={date.year}
                            onChange={(e) => setDate({
                                ...date,
                                year: e.target.value
                            }
                            )}
                        >
                            <option value="00">2000</option>
                            <option value="01">2001</option>
                            <option value="02">2002</option>
                            <option value="03">2003</option>
                            <option value="04">2004</option>
                            <option value="05">2005</option>
                            <option value="06">2006</option>
                            <option value="08">2007</option>
                            <option value="08">2008</option>
                            <option value="09">2009</option>
                            <option value="10">2010</option>
                            <option value="11">2011</option>
                            <option value="12">2012</option>
                            <option value="13">2013</option>
                            <option value="14">2014</option>
                            <option value="15">2015</option>
                            <option value="16">2016</option>
                            <option value="17">2017</option>
                            <option value="18">2018</option>
                            <option value="19">2019</option>
                            <option value="20">2020</option>
                            <label>Memory Year</label>
                        </select>
                    </div>
                </div>

                {!isPending && <button className="btn waves-effect waves-light z-depth-0">Add Memory</button>}
                {isPending && <button className="btn waves-effect waves-light z-depth-0">Adding Memory</button>}
            </form>
            <br />
        </div>
    );
}

export default CreatePost;