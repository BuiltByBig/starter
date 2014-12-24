var React = require('react');
var Modal = require('react-bootstrap').Modal;
var Button = require('react-bootstrap').Button;
var Input = require('react-bootstrap').Input;
var CustomerActions = require('../actions').Customers;

var Component = React.createClass({
  getInitialState: function () {
    return {
      name: '',
      email: ''
    };
  },

  componentDidMount: function () {
    this.setState({
      id: this.props.id,
      name: this.props.name,
      email: this.props.email
    });
  },

  onHide: function (e) {
    e.preventDefault();
    alert('hide!');
    return;
  },

  onSubmit: function (e) {
    if (e) { e.preventDefault(); }
    console.log('Update customer:', this.state);
    CustomerActions.update(this.state);
  },

  onClose: function (e) {
    if (e) { e.preventDefault(); }
    console.log('Cancel editing customer:', this.state.name);
    CustomerActions.stopEditing(this.props.id);
  },

  handleChangeName: function (e) {
    this.setState({ name: e.target.value });
  },

  handleChangeEmail: function (e) {
    this.setState({ email: e.target.value });
  },

  render: function () {
    var title = "Edit " + this.props.name;

    return (
      <Modal
        title={title}
        backdrop={true}
        animation={false}
        onRequestHide={this.onClose}>
        <form onSubmit={this.onSubmit}>
          <div className="modal-body">
            <Input
              type="text"
              value={this.state.name}
              placeholder="Full name..."
              label="Full Name"
              onChange={this.handleChangeName} />
            <Input
              type="email"
              value={this.state.email}
              placeholder="Email address..."
              label="Email"
              onChange={this.handleChangeEmail} />
          </div>
          <div className="modal-footer">
            <Button
              onClick={this.onClose}>
              Close</Button>
            <Button
              type="submit"
              bsStyle="success"
              onClick={this.onSubmit}>
              Save Changes</Button>
          </div>
        </form>
      </Modal>
    );
  }
});

module.exports = Component;
