import React from "react"
import renderer from "react-test-renderer"
import {render, fireEvent, cleanup} from 'react-testing-library'
import VideoPlayer from "../video-player";
import {toHaveStyle} from 'jest-dom';
import { mount } from 'enzyme';


expect.extend({toHaveStyle})


describe("VideoPlayer", () => {


  it("renders correctly when URL is empty", () => {

    const tree = renderer
      .create(<VideoPlayer
                url={""}
                lightTheme={false}
                onReady={"callback"}
                onStart={"callback"}
                onPlay={"callback"}
                onEnded={"callback"} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })


  it("renders correctly when URL is supplied", () => {

    let onReadyVal = false;

    const onReady = (event) => {
      // access to player in all event handlers via event.target
      // console.log("_onReady Fired");
      onReadyVal=true;
    }

    const videoOnStart = (event) => {
      // console.log("_onStart Fired");
    }

    const videoOnPlay = (event) => {
      // console.log("_onPlay Fired");
    }

    const videoOnEnded = (event) => {
      // access to player in all event handlers via event.target
      // console.log("_onEnded Fired");
    }

    // console.log(onReady);

    const wrapper = mount(<VideoPlayer
                url={"someValue"}
                lightTheme={true}
                onReady={onReady}
                onStart={videoOnStart}
                onPlay={videoOnPlay}
                onEnded={videoOnEnded} />);

    expect(onReadyVal).toEqual(false);
    wrapper.setProps({url: "new value"});
    expect(wrapper.prop("url")).toEqual("new value");

    expect(onReadyVal).toEqual(false);

    wrapper.setProps({lightTheme: false});
    expect(wrapper.prop("lightTheme")).toEqual(false);

  })

})


