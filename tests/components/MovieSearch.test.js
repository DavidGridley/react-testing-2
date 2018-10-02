import React from "react";
import { shallow } from 'enzyme';
import MovieSearch from "../../src/components/MovieSearch";
import renderer from "react-test-renderer";

describe("MovieSearch", () => {

  test("matches the snapshot", () => {
    const tree = renderer
      .create(<MovieSearch movieString="hello world" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('executes submitSearch function when form is submitted', () => {
    const mockSubmitSearch =jest.fn();
    const event = {
        preventDefault: jest.fn()
    }
    const wrapper = shallow(<MovieSearch submitSearch={mockSubmitSearch} movieString={'spiderman'} />);
    wrapper.find('form').simulate('submit', event);
    expect(mockSubmitSearch.mock.calls).toEqual([['spiderman']])
    expect(event.preventDefault.mock.calls).toEqual([[]])
  });
})
