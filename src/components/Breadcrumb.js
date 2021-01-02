import React, { useState, useEffect } from 'react';
import { Container, Breadcrumb } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const BreadCrumb = (props) => {

    const breadcrumbLinks = props.breadcrumbData;

    return (
        <Container key="123">
            <Breadcrumb style={{ backgroundColor: "white" }}>
                {breadcrumbLinks && breadcrumbLinks.length ?
                    breadcrumbLinks.map((breadcrumbItem, index) => {
                        return <Breadcrumb.Item {...breadcrumbItem.active ? { active: 'active' } : {}} href={breadcrumbItem.link}> {breadcrumbItem.displayText}</Breadcrumb.Item>
                    }) : ''}
            </Breadcrumb>
        </Container >
    )
};

export default BreadCrumb;