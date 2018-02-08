require 'test_helper'

class Api::ProjectDiscoveryControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_project_discovery_index_url
    assert_response :success
  end

end
