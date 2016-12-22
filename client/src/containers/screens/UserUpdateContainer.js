import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUser, updateUser } from '@src/ducks/auth';
import { UserUpdateForm } from '@src/components/screens';
import formValidation from '@src/utils/form/formValidation';

const mapStateToProps = (state) => ({
    user: getUser(state),
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ updateUser }, dispatch),
});

@connect(mapStateToProps, mapDispatchToProps)
export default class UserUpdateContainer extends Component {
    static propTypes = {
        user: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired,
    };

    state = {
        formErrors: {},
    };

    onSubmit = (updateUserData) => {
        const { actions, user } = this.props;

        this.setState({ formErrors: {} });

        formValidation({ updateUserData })
            .then(() => {
                actions.updateUser(user.id, updateUserData);
            }, (err) => {
                this.setState({ formErrors: err.updateUserData });
            });
    }

    render() {
        const { user } = this.props;
        const { formErrors } = this.state;

        if (!user) {
            return (<div />);
        }

        return (
            <UserUpdateForm
                user={user}
                formErrors={formErrors}
                onSubmit={this.onSubmit}
            />
        );
    }
}
