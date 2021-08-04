import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Form extends React.Component {
    state = {
        title: 'JavaScript',
        text: 'React',
        library: 'React',
        isCheckBox: true,
    };

    handleChange = (e) => {
        if (e.target.type === 'text') {
            this.setState({
                title: e.target.value,
            });
        } else if (e.target.type === 'textarea') {
            this.setState({
                text: e.target.value,
            });
        } else if (e.target.type === 'select-one') {
            this.setState({
                library: e.target.value,
            });
        } else if (e.target.type === 'checkbox') {
            this.setState({
                isCheckBox: e.target.checked,
            });
        } else {
            console.log(e.target.type);
            console.log('nothing here');
        }
    };

    submitHandeler = (e) => {
        const { title, text, library, isCheckBox } = this.state;
        e.preventDefault();
        console.log(title, text, library, isCheckBox);
    };

    render() {
        const { title, text, library, isCheckBox } = this.state;
        return (
            <div>
                <form onSubmit={this.submitHandeler}>
                    <input
                        type="text"
                        placeholder="Enter "
                        value={title}
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />

                    <textarea type="textarea" value={text} onChange={this.handleChange} />

                    <br />
                    <br />
                    <select value={library} onChange={this.handleChange}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                        <option value="Vue">Vue</option>
                    </select>

                    <br />
                    <br />
                    <input type="checkbox" checked={isCheckBox} onChange={this.handleChange} />
                    <br />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Form;
