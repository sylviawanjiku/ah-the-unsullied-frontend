import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ArticleDelete, mapStateToProps } from '../ArticleDelete';

Enzyme.configure({ adapter: new Adapter() });
describe('single article delete', () => {
  let props;
  let wrapper;
  let wrapperInstance;
  let state;
  beforeEach(() => {
    props = {
      auth: {
        isAuthenticated: true,
        user: {
          username: 'nesh'
        }
      },

      article: {
        article: {
          article: {
            title: 'my article',
            description: 'some stuff',
            slug: 'my-article',
            body: 'gsgsgsg',
            dislikes: 1,
            likes: 2,
            liked: false,
            displiked: false,
            is_reported: false,
            created_at: '01-01-2019',
            author: {
              bio: 'i have abio',
              username: 'nesh',
              image: 'hshhshs'
            }
          }
        }
      },

      match: {
        params: {
          slug: 'my-article'
        }
      },
      
      history:{
        push: jest.fn(),
      },
      
      deleteArticles: jest.fn(),
      ownerDelete: jest.fn(),
      deleteAction: jest.fn()
    };

  

    state = {
      auth: {},
      articlereducer: {
        article: {
          article: {
            article: {
              article: {}
            }
          }
        }
      },
      loading: true
    };

    wrapper = shallow(<ArticleDelete {...props} />);
    wrapperInstance = wrapper.instance();
  });

    it('should mapStateToProps', () => {
      const props = mapStateToProps(state);
      expect(props.article.article).toEqual(state.articlereducer.article);
    });

    it('should change the state when calling handLike', () => {
      const slug = 'my-article';
      wrapperInstance.deleteAction();
      expect(props.deleteArticles).toHaveBeenCalledWith(slug);
    });

  it('should render article view component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
