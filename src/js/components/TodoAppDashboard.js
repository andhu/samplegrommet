import React, { Component } from 'react';
import Header from 'grommet/components/Header';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Meter from 'grommet/components/Meter';
import Table from 'grommet/components/Table';
import Section from 'grommet/components/Section';
import Status from 'grommet/components/icons/Status';

import { connect } from 'react-redux';
import * as actions from '../actions';

function getLabel(label, count, colorIndex) {
  return {
    "label": label,
    "value": count,
    "colorIndex": colorIndex
  };
}

class TodoAppDashboard extends Component {
  componentWillMount() {
    this.props.fetchTasks();
  }

  renderTasks() {
    return this.props.tasks.map((task, index) => {
      return (
        <tr key={index}>
          <td><Status value={task.status} small={true} /></td>
          <td>{task.item}</td>
        </tr>
      );
    });
  }

  renderTasksMap(tasks) {

    const tasksMap = {
      critical: 0,
      ok: 0,
      warning: 0
    };

    tasks.map((task) => {
      tasksMap[task.status] += 1;
    });

    return (
      <Tile align="center">
        <Meter series={[
          getLabel('Past Due', tasksMap.critical, "critical"),
          getLabel('Due Soon', tasksMap.warning, "warning"),
          getLabel('Done', tasksMap.ok, "ok")
        ]} type="circle" units="Tasks" />
      </Tile>
    );
  }


  render () {
    return (
      <Section primary={true}>
        <Tiles fill={true} flush={false}>
          {this.renderTasksMap(this.props.tasks)}
          <Tile>
            <Header><h3>My Tasks:</h3></Header>
            <Table>
              <tbody>
                {this.renderTasks()}
              </tbody>
            </Table>
          </Tile>
        </Tiles>
      </Section>
    );
  }
};

function mapStateToProps(state) {
  return {
    tasks: state.tasks.all
  };
}

export default connect(mapStateToProps, actions)(TodoAppDashboard);
