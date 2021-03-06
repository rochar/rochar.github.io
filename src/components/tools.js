import React from "react";
import axios from "axios";
import Spinner from "./spinner";
class Tools extends React.Component {
  state = { toolsData: [], families: [], error: null };

  /*axios example with async await*/
   componentDidMount= async() => {
    try {
      const response = await axios.get("./data/toolsdata.json");
      const unqiueFamilies = this.computeFamilies(response.data);
      this.setState({
        toolsData: response.data,
        families: unqiueFamilies,
        error: null,
      });
    } catch (error) {
      console.log(error);
      this.setState({ toolsData: [], families: [], error: error });
    }
  }

  
  renderFamilies() {
    const { toolsData, families, error } = this.state;

    if (error !== null) {
      return;
    }
    const components = families.map((family) => (
      <option key={family}>{family}</option>
    ));
    return (
      <select className="form-select" onChange={this.onSelectedFamilyChanged}>
        {components}
      </select>
    );
  }
  renderListTools() {
    const { toolsData, families, error } = this.state;

    if (error !== null) {
      return <div>Could not load tools: {error}</div>;
    }
    if (toolsData.length > 0) {
      const components = toolsData.map(({url,description,title}) => (
        <div key={url} className="p-2">
          <a href={url} target="_blank">
            {title}
          </a>
          <div>{description}</div>
        </div>
      ));
      return <div>{components}</div>;
    }

    return <Spinner />;
  }

  render() {
    return (
      <div className="p-3">
        <form onSubmit={this.onFormSubmit}>
          {this.renderFamilies()}
          <div>{this.renderListTools()}</div>
        </form>
      </div>
    );
  }

  onFormSubmit(event) {
    event.preventDefault();
  }

  onSelectedFamilyChanged(event) {
    console.log(event.target.value);
  }

  computeFamilies(toolsData) {
    const uniqueValues = new Set();
    for (const tool of toolsData) uniqueValues.add(tool.family);
    return Array.from(uniqueValues).sort();
  }
}

export default Tools;
