import React, { Component } from 'react';

class Sort extends Component { 

    componentWillReceiveProps = (nextProps) => {
      console.log(nextProps);
    }
    
    onSort = (sortBy, sortValue) =>{
    
        //console.log(this.state);
        this.props.onSort(sortBy,sortValue);
    }
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Sort <span className="fa fa-caret-square-o-down ml-5" />
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li onClick={ () => this.onSort('name',1) } >
                        <a href='/'>
                            <i className="glyphicon glyphicon-glyphicon-sort-by-alphabet mr-10" data-unicode="e151"></i>
                            <span className="fa fa-sort-alpha-asc pr-5">
                            Sort A-Z
                                <i className="glyphicon glyphicon-glyphicon-ok mt-10" data-unicode="e013"></i>
                            </span>
                            
                        </a>
                        </li>
                        <li onClick={ () => this.onSort('name',-1) }>
                        <a href="/">
                            <i className="glyphicon glyphicon-glyphicon-sort-by-alphabet-alt mr-10" data-unicode="e152"></i>
                            <span className="fa fa-sort-alpha-asc pr-5">
                                Sort Z-A
                                {/* <i className="glyphicon glyphicon-glyphicon-ok mt-10" data-unicode="e013"></i> */}
                            </span>
                        </a>
                        </li>
                        <li role="separator" className="divider" />
                        <li  onClick={ () => this.onSort('status',1) }><a href="/">Active status</a></li>
                        <li  onClick={ () => this.onSort('status',-1) }><a href="/">Visibility status</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sort;