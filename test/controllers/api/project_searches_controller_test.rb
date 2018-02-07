require 'test_helper'

class Api::ProjectSearchesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_project_searches_index_url
    assert_response :success
  end

end
