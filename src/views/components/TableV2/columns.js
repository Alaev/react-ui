import React from 'react';
export const columns = [
  {
    id: 'id',
    Header: 'id',
    accessor: d => (
      <div className="has-text-centered">
        {d.id}
      </div>)
  },
  {
    id: 'name',
    Header: 'Course Name',
    accessor: d => (
      <div className="has-text-centered">
        {d.name}
      </div>),
  },
  {
    id: 'date',
    Header: 'date',
    accessor: d => (
      <div className="has-text-centered">
        {d.date}
      </div>),
  },
  {
    Header: 'author',
    accessor: 'author',
    Cell: props => (
      <div className="has-text-centered">
        <span className="tag is-round is-info">{props.value}</span>
      </div>
    ),
  },
  {
    id: 'publisher',
    Header: props => <span>publisher</span>,
    accessor: d => (
      <div className="has-text-centered">
        {d.publisher}
      </div>),
  },
  {
    id: 'watched',
    Header: props => <span>watched</span>,
    accessor: d => (
      <div className="has-text-centered">
        <input type="checkbox" name="checkbox" defaultChecked={d.watched.value} />
      </div>),
  },
];