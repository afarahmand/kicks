require 'test_helper'

class Api::BackingscontrollerControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_backingscontroller_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_backingscontroller_destroy_url
    assert_response :success
  end

  test "should get index" do
    get api_backingscontroller_index_url
    assert_response :success
  end

  test "should get show" do
    get api_backingscontroller_show_url
    assert_response :success
  end

end
