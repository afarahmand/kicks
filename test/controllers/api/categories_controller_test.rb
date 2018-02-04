require 'test_helper'

class Api::CategoriesControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_categories_create_url
    assert_response :success
  end

  test "should get index" do
    get api_categories_index_url
    assert_response :success
  end

  test "should get show" do
    get api_categories_show_url
    assert_response :success
  end

end
