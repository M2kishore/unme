import React,{ Component } from 'react';
class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({
            file: URL.createObjectURL(e.target.files[0])
        })
    }

    render() {
        return (
            <div className="file-field input-field">
                <div className="btn">
                    <span>File</span>
                    <input type="file" onChange={this.handleChange} />
                </div>
                <div class="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                </div>
                    <img src={this.state.file} width="200" height="200" alt='upload_img'/>
                </div>
                )
    }
}
                export default ImageUpload;